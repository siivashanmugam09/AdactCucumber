package org.step;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.PojoClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Flow extends BaseClass {

	PojoClass p;

	@Given("user should be on login page")
	public void user_should_be_on_login_page() {
		launchBrowser();
		loadUrl("http://adactinhotelapp.com/index.php");
	}

	@When("user should give username and password")
	public void user_should_give_username_and_password(DataTable d) throws IOException {
		List<String> list = d.asList();
		String pass = list.get(1);
		Map<String, String> cred = excelread("TC_1");
		String user = cred.get("Username");
		p = new PojoClass();
		type(p.getUserid(), user);
		type(p.getPass(), pass);
		toClick(p.getBtnlogin());

	}

	@When("user select {string},hotel,room type")
	public void user_select_hotel_room_type(String location, DataTable d) {

		selectValue(p.getLocation(), location);
		List<List<String>> lists = d.asLists();
		List<String> list = lists.get(0);
		String hotel = list.get(0);
		selectValue(p.getHotelname(), hotel);
		List<List<String>> lists1 = d.asLists();
		List<String> list1 = lists1.get(1);
		String roomtype = list1.get(0);
		selectValue(p.getRoom(), roomtype);

	}

	@When("no of rooms")
	public void no_of_rooms(DataTable d) {

		List<String> list = d.asList();
		String noofrooms = list.get(0);
		selectText(p.getNoofrooms(), noofrooms);

	}

	@When("user enter checkin,checkout")
	public void user_enter_checkin_checkout(DataTable d) throws IOException {

		p.getCheckin().clear();
		Map<String, String> dates = excelread("TC_1");
		String chk = dates.get("Checkin");
		List<List<String>> lists = d.asLists();
		List<String> list = lists.get(0);
		String checkin = list.get(0);
		type(p.getCheckin(), chk);
		List<List<String>> lists1 = d.asLists();
		List<String> list1 = lists1.get(1);
		String checkout = list1.get(0);
		p.getCheckout().clear();
		type(p.getCheckout(), checkout);

	}

	@When("user enter adult, child and click")
	public void user_enter_adult_child_and_click(DataTable d) {

		List<List<String>> lists = d.asLists();
		List<String> list = lists.get(0);
		String adults = list.get(0);
		selectText(p.getAdult(), adults);
		List<List<String>> lists1 = d.asLists();
		List<String> list1 = lists1.get(1);
		String child = list1.get(0);
		selectText(p.getChild(), child);
		toClick(p.getBtnsearch());

	}

	@When("user select hotel and click continue")
	public void user_select_hotel_and_click_continue() {

		toClick(p.getBtnradio());
		toClick(p.getBtncontinue());
	}

	@When("user enter firstname,lastname,address")
	public void user_enter_firstname_lastname_address(DataTable d) {
		Map<String, String> map = d.asMap(String.class, String.class);
		String firstname = map.get("firstname");
		String lastname = map.get("lastname");
		String address = map.get("address");
		type(p.getFirstname(), firstname);
		type(p.getLastname(), lastname);
		type(p.getAddress(), address);
	}

	@When("user enter card no,card type,expmonth,expyear,cvv and click book")
	public void user_enter_card_no_card_type_expmonth_expyear_cvv_and_click_book(DataTable d) {
		List<Map<String, String>> list = d.asMaps();
		Map<String, String> map = list.get(0);
		String cardnum = map.get("cardno");
		String cardtype = map.get("type");
		String month = map.get("month");
		String year = map.get("year");
		String cvv = map.get("cvv");
		type(p.getCardno(), cardnum);
		selectValue(p.getCardtype(), cardtype);
		selectText(p.getCardexpmn(), month);
		selectText(p.getCardexpyr(), year);
		type(p.getCvv(), cvv);
		toClick(p.getBtnbook());

	}

	@Then("User should be in booking confirmation page")
	public void user_should_be_in_booking_confirmation_page() throws InterruptedException {
		Thread.sleep(10000);
		if (driver.getCurrentUrl().contains("BookingConfirm")) {
			WebElement findElement = driver.findElement(By.id("order_no"));
			String attribute = findElement.getAttribute("value");
			System.out.println("your order no:" + attribute);
			downScroll(driver.findElement(By.xpath("//a[text()='Change Password']")));
			System.out.println("Room Booked");
		} else {
			System.out.println("Room not booked");
		}
	}

}
