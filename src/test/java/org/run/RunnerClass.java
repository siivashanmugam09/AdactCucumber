package org.run;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features\\Flow.feature",dryRun = true,glue = "org.step",plugin = {"junit:target\\Reports\\flow.xml"})
public class RunnerClass {

}
