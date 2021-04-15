package org.run;

import org.base.BaseClass;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features\\Flow.feature",dryRun = false,glue = "org.step",monochrome = true,plugin = {"junit:target\\Reports\\flow.xml","pretty","html:target","json:target\\report\\output.json"})
public class RunnerClass {
@AfterClass
public static void jvmreport() {
 BaseClass.generate("C:\\Users\\rider\\eclipse-workspace\\CucumberAdactNew\\target\\Reports\\flow.json");
}
}
