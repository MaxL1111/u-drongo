package uksdrongo.by.uksdrongo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

    @GetMapping("/housing")
    public String housing(Model model) {
        return "housing";
    }

    @GetMapping("/tehnadzor")
    public String tehnadzor(Model model) {
        return "tehnadzor";
    }

    @GetMapping("/blank-1")
    public String blank1(Model model) {
        return "blank-1";
    }

    @GetMapping("/blank-2")
    public String blank2(Model model) {
        return "blank-2";
    }

    @GetMapping("/blank-3")
    public String blank3(Model model) {
        return "blank-3";
    }
}