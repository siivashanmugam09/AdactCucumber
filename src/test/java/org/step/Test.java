package org.step;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.net.*;

public class Test {
    public static void main(String[] args) throws IOException {
//        WebDriverManager.chromedriver().driverVersion("137.0.7151.41").setup();
//        WebDriver driver = new ChromeDriver();
//        driver.get("https://demo.automationtesting.in/Register.html");
//        System.out.println( driver.findElement(By.id("Skills")).getText());

        URL LINK = new URL("https://www.google.");
        HttpURLConnection http = (HttpURLConnection) LINK.openConnection();
        http.setConnectTimeout(5000);
        http.connect();
        int responseCode = http.getResponseCode();
        System.out.println(responseCode);

    }
}
