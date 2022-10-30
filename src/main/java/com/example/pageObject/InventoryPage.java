package com.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class InventoryPage {

    public static WebDriver driver;

    public InventoryPage (WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-backpack']")
    private static WebElement clickButtonIndex1;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private static WebElement productSort;

    public void clickBasketIndrex1(){
        clickButtonIndex1.click();
    }

    @FindBy (xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    private static WebElement clickButtonAddtoCart1;

    @FindBy (xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    private static WebElement clickButtonAddtoCart2;

    @FindBy (xpath = "//a[.='2']")
    private static WebElement clickCartIcon;

    @FindBy (xpath = "//button[@id='remove-test.allthethings()-t-shirt-(red)']")
    private static WebElement clickButtonRemove;

    @FindBy (xpath = "//button[@id='checkout']")
    private static WebElement ButtonCheckout;

    @FindBy(xpath = "//input[@id='first-name']")
    private static WebElement firstName;

    @FindBy (xpath = "//input[@id='last-name']")
    private static WebElement lastName;

    @FindBy (xpath = "//input[@id='postal-code']")
    private static WebElement postalCode;

    @FindBy (xpath = "//input[@id='continue']")
    private static WebElement clickContinue;

    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    private static WebElement totalItem;

    @FindBy(xpath = "//div[@class='summary_tax_label']")
    private static WebElement taxItem;

    @FindBy (xpath = "//div[@class='summary_total_label']")
    private static WebElement totalPrice;

    @FindBy (xpath = "//button[@id='finish']")
    private static WebElement ButtonFinish;

    @FindBy (xpath = "//h2[@class='complete-header']")
    private static WebElement textFinishing;
    public void sortProduct (String sortProduct){
        productSort.click();
        Select a = new Select(productSort);
        a.selectByVisibleText(sortProduct);
    }
    public void chooseItem (String itemName){
        driver.findElement(By.xpath("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']"));
    }
    public void chooseItem2 (String itemName2){
        driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-onesie']"));
    }
    public void clickAddToCart1(String itemName){
        clickButtonAddtoCart1.click();
    }
    public void clickAddToCart2(String itemName2){
        clickButtonAddtoCart2.click();
    }
    public void clickIconCart(){
        clickCartIcon.click();
    }
    public void clickRemoveItem(){
        clickButtonRemove.click();
    }
    public void clickButtonCheckout(){
        ButtonCheckout.click();
    }
    public void inputCredential2(String firstname, String lastname, String code){
        String xpat1 = "//input[@id='first-name']";
        String xpat2 = "//input[@id='last-name']";
        String xpat3 = "//input[@id='postal-code']";

        driver.findElement(By.xpath(xpat1)).sendKeys(firstname);
        driver.findElement(By.xpath(xpat2)).sendKeys(lastname);
        driver.findElement(By.xpath(xpat3)).sendKeys(code);
    }
    public void clickButtonContinue(){
        clickContinue.click();
    }
    public String getTotalItem(String total){
        return totalItem.getText();
    }
    public String getTaxItem(String tax){
        return taxItem.getText();
    }
    public String getTotalPrice (String totalprice){
        return totalPrice.getText();
    }
    public void clickButtonFinish(){
        ButtonFinish.click();
    }
    public String getFinishingText (String text){
        return textFinishing.getText();
    }

}
