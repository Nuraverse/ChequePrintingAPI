package com.cheque.print.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

    @RequestMapping(value = { "/", "/**/{path:[^\\.]*}" })
    public String redirect() {
        return "forward:/index.html"; // Forward all unmatched routes to index.html
    }
}