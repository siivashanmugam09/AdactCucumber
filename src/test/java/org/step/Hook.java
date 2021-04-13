package org.step;

import java.io.IOException;

import org.base.BaseClass;
import org.openqa.selenium.TakesScreenshot;

import gherkin.ast.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hook  extends BaseClass{
	
	@Before
	
	public void browserLaunch() {
		System.out.println("Scenario starts");

	}
	
	@After
	public void snap(io.cucumber.core.api.Scenario s) throws IOException {
		String name = s.getName();
		String replace = name.replace(" ", "_");
		screenshot(replace);
		System.out.println("Scenario End");
		
	}
	

}
