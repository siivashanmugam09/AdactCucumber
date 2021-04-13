package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoClass extends BaseClass {
	public static PojoClass p;
public PojoClass() {
	PageFactory.initElements(driver, this);	
}
public static PojoClass getInstance() {
	if (p==null) {
		p= new PojoClass();
	}return p;

}
@FindBy(name="username")
private WebElement userid;
@FindBy(name="password")
private WebElement pass;
@FindBy(name="login")
private WebElement btnlogin;
@FindBy(name="location")
private WebElement location;
@FindBy(name="hotels")
private WebElement hotelname;
@FindBy(name="room_nos")
private WebElement Noofrooms;
@FindBy(name="datepick_in")
private WebElement Checkin;
@FindBy(name="datepick_out")
private WebElement checkout;
@FindBy(name="adult_room")
private WebElement adult;
@FindBy(name="child_room")
private WebElement child;
@FindBy(name="Submit")
private WebElement btnsearch;
@FindBy(name="radiobutton_0")
private WebElement btnradio;
@FindBy(name="continue")
private WebElement btncontinue;
@FindBy(name="first_name")
private WebElement firstname;
@FindBy(name="last_name")
private WebElement lastname;
@FindBy(name="address")
private WebElement address;
@FindBy(name="cc_num")	
private WebElement cardno;
@FindBy(name="cc_type")
private WebElement cardtype;
@FindBy(name="cc_exp_month")
private WebElement cardexpmn;
@FindBy(name="cc_exp_year")
private WebElement cardexpyr;
@FindBy(name="cc_cvv")
private WebElement cvv;
@FindBy(name="book_now")
private WebElement btnbook;
@FindBy(name="order_no")
private WebElement reciptno;
public WebElement getFirstname() {
	return firstname;
}
public WebElement getLastname() {
	return lastname;
}
public WebElement getAddress() {
	return address;
}
public WebElement getCardno() {
	return cardno;
}
public WebElement getCardtype() {
	return cardtype;
}
public WebElement getCardexpmn() {
	return cardexpmn;
}
public WebElement getCardexpyr() {
	return cardexpyr;
}
public WebElement getCvv() {
	return cvv;
}
public WebElement getBtnbook() {
	return btnbook;
}
public WebElement getReciptno() {
	return reciptno;
}
public WebElement getBtncontinue() {
	return btncontinue;
}
public WebElement getBtnradio() {
	return btnradio;
}
public WebElement getNoofrooms() {
	return Noofrooms;
}
public WebElement getCheckin() {
	return Checkin;
}
public WebElement getCheckout() {
	return checkout;
}
public WebElement getAdult() {
	return adult;
}
public WebElement getChild() {
	return child;
}
public WebElement getBtnsearch() {
	return btnsearch;
}
public WebElement getLocation() {
	return location;
}
public WebElement getHotelname() {
	return hotelname;
}
public WebElement getRoom() {
	return room;
}
@FindBy(name="room_type")
private WebElement room;
public WebElement getBtnlogin() {
	return btnlogin;
}
public WebElement getUserid() {
	return userid;
}
public WebElement getPass() {
	return pass;
}
}
