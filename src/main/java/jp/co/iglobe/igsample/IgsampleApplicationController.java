package jp.co.iglobe.igsample;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IgsampleApplicationController {

	@GetMapping("/top")
	public String top(Model model) {
		model.addAttribute("message", "hello thymeleaf");
		return "index";
	}


}
