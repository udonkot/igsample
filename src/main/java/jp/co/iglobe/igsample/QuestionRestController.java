package jp.co.iglobe.igsample;


import java.util.Collections;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jp.co.iglobe.igsample.bean.Question1InputBean;

@org.springframework.web.bind.annotation.RestController
public class QuestionRestController {

	/**
	 *
	 * @return
	 */
	@RequestMapping(value="/top/question/1/blogic", consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String,String> question1BLogic(@RequestBody Question1InputBean bean) {

		System.out.println(bean.getParam1());
		System.out.println(bean.getParam2());

		return Collections.singletonMap("response", bean.getParam2() + "__HOGE");

	}



}
