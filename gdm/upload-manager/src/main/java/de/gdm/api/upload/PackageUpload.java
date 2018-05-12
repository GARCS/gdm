package de.gdm.api.upload;

import java.io.File;
import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import de.gdm.ejb.SelfConfigService;
import de.gdm.entity.SelfConfigEntity;

@WebServlet("/PackageUpload")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
		         maxFileSize = 1024 * 1024 * 50,      // 50MB
		         maxRequestSize = 1024 * 1024 * 50)   // 50MB
public class PackageUpload extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Inject
	protected SelfConfigService service;
	
	private SelfConfigEntity config;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
		config = service.findAll().get(0); // TODO what if no config...
		
		String appname = req.getParameter("appname"); // TODO what to do if no appname
		String saveDir = config.getUploadPath() + File.separator + appname;
		
		
		File fileSaveDir = new File(saveDir);
        
        if (!fileSaveDir.exists()) {
        	fileSaveDir.mkdirs();
        	System.out.println("Save folder created " + saveDir);
        }
        
        for (Part part : req.getParts()) {
            String fileName = extractFileName(part);
            // refines the fileName in case it is an absolute path
            fileName = new File(fileName).getName();
            part.write(saveDir + File.separator + fileName);
            try {
				ExtractAndParsePackage.extractPackageFile(saveDir + File.separator + fileName);
				ExtractAndParsePackage.parsePackageMetaData(saveDir);
			} catch (Exception e) {
				resp.setStatus(HttpServletResponse.SC_UNSUPPORTED_MEDIA_TYPE);
				// TODO put some more details to output stream 
			}
        }
        
        resp.setStatus(HttpServletResponse.SC_OK);
	}

	/**
     * Extracts file name from HTTP header content-disposition
     */
    private String extractFileName(Part part) {
        String contentDisp = part.getHeader("content-disposition");
        String[] items = contentDisp.split(";");
        for (String s : items) {
            if (s.trim().startsWith("filename")) {
                return s.substring(s.indexOf("=") + 2, s.length()-1);
            }
        }
        return "";
    }
}
