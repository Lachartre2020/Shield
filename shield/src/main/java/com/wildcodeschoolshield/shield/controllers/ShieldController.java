package com.wildcodeschoolshield.shield.controllers;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShieldController {
	
	@GetMapping("/")
	public String welcome() {
		return "Welcome to the SHIELD";
	}

	
	@PreAuthorize("hasRole('CHAMPION')")
	@GetMapping("/avengers/assemble")
	public String avengers() {
		return "Avengers ...Assemble";
    }
	
	@PreAuthorize("hasRole('DIRECTOR')")
	@GetMapping("/secret-bases")
	public String direct() {
		return "Paris, Tokyo....";
    }
	
	
	
	
}
