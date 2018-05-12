package de.gdm.api.upload;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import com.fasterxml.jackson.databind.ObjectMapper;

import de.gdm.api.packagedata.PackageMetaData;

/**
 * 
 * @author markus
 *
 * Stuff to extract and parse an uploaded package.
 */
public class ExtractAndParsePackage {
    
    /*
     * TODO
     * * done - unzip file
     * * done - read package meta data
     * * verify meta data (check if everything is where it belongs)
     * * check if earlier version of package exists in system
     * * compute path and check if exists
     * * copy stuff to proper folders
     * * make/change systemd entry
     * * prepare entry to let user decide if to stop old version and start new one
     */

	public static void extractPackageFile(String packageFilePath) throws Exception {
		File packageFile = new File(packageFilePath);
		String folder = packageFile.getAbsolutePath().
			    substring(0,packageFile.getAbsolutePath().lastIndexOf(File.separator));
			
		
		ZipInputStream zis = new ZipInputStream(new FileInputStream(packageFile));
		ZipEntry ze = zis.getNextEntry();
		System.out.println(packageFile.getAbsolutePath());
		while(ze!=null) {
			String tmpFilePath = folder + File.separator + ze.getName();
			if(!ze.isDirectory()) {
				extractFile(zis, tmpFilePath);
				if(tmpFilePath.contains("manifest.json")) {
					parsePackageMetaData(tmpFilePath);
				}
			} else {
                // if the entry is a directory, make the directory
                File dir = new File(tmpFilePath);
                dir.mkdir();
			}
			zis.closeEntry();
			ze = zis.getNextEntry();
		}
		zis.close();
	}
	
	public static PackageMetaData parsePackageMetaData(String packageFilePath) {
		ObjectMapper objectMapper = new ObjectMapper();
		PackageMetaData result = new PackageMetaData();
		
		try {
			byte[] jsonData = Files.readAllBytes(Paths.get(packageFilePath));
			result = objectMapper.readValue(jsonData, PackageMetaData.class);
			System.out.println(result.getUniqueNodeIdentifier());
			
		} catch (IOException e) {
			System.out.println("no manifest found, this package is not usable");
			e.printStackTrace();
		}
		return result;
	}
	
    /**
     * Extracts a zip entry (file entry)
     * @param zipIn
     * @param filePath
     * @throws IOException
     */
    private static void extractFile(ZipInputStream zipIn, String filePath) throws IOException {
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(filePath));
        byte[] bytesIn = new byte[1024];
        int read = 0;
        while ((read = zipIn.read(bytesIn)) != -1) {
            bos.write(bytesIn, 0, read);
        }
        bos.close();
    }
	
	public static void main(String[] args) throws Exception {
		// for test purpose only
		ExtractAndParsePackage.extractPackageFile("/opt/bot/uploads/flos-java-sample/flos-java-sample.zip");
	}

}
