package jp.co.iglobe.igsample;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.Map;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jp.co.iglobe.igsample.bean.Question2InputBean;

@Controller
@EnableAutoConfiguration
public class QuestionController {

	/**
	 *
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value="/top/question/2/blogic", method=RequestMethod.POST)
	@ResponseBody
	public Map<String,String> question2BLogic(Question2InputBean bean) throws IOException {

		MultipartFile fileData = bean.getFile();
		System.out.println(fileData.getOriginalFilename());

		InputStreamReader reader = new InputStreamReader(fileData.getInputStream());
		BufferedReader br = new BufferedReader(reader);
		br.lines().forEach(line -> {
			System.out.println(line);
		});

		return Collections.singletonMap("response", "OK");

	}
}
