package jp.co.iglobe.igsample.bean;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public class Question2InputBean implements Serializable {

	private MultipartFile file= null;

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}
