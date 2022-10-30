package step_definitions;
import com.example.pageObject.InventoryPage;
import com.example.pageObject.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Assert;import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;


public class purchaseSteps {
    private WebDriver webDriver;

    public purchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User sort product list by \"(.*)\"")
    public void selectProductCart (String sortProduct) throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Thread.sleep(3000);
        inventoryPage.sortProduct(sortProduct);
    }
    @Then("User choose first item \"(.*)\" and checkout to cart")
    public void addToCart1(String itemName){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickAddToCart1(itemName);
    }
    @And("User choose second item \"(.*)\" and checkout to cart")
    public void addToCart2(String itemName2){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickAddToCart2(itemName2);
    }
    @Then("User click Cart Icon")
    public void clickToCartIcon(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickIconCart();
    }

    @Then("User click button remove item")
    public void removeItem(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickRemoveItem();
    }

    @And("User click button checkout")
    public void checkoutItem(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickButtonCheckout();
    }
    @Then("User input \"(.*)\" as firstname and \"(.*)\" as lasname and \"(.*)\" as postalcode")
    public void inputCredential2(String firstname, String lastname, String code){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.inputCredential2(firstname, lastname, code);
    }
    @And("User click button continue")
    public void clickButtonContinue(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickButtonContinue();
    }
    @Then("User verify total item \"(.*)\" as expected total item")
    public void totalItem(String total){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.getTotalItem(total);
    }
    @And("User verify tax item \"(.*)\" as expected tax item")
    public void taxItem(String tax){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.getTaxItem(tax);
    }
    @And("User verifiy Total price \"(.*)\" as expected total price")
    public void totalPrice (String totalprice){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.getTotalPrice(totalprice);
    }
    @Then("User click button Finish")
    public void clickButtonFinish(){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickButtonFinish();
    }
    @Then("User verify \"(.*)\" as finishing text")
    public void finishingText (String text){
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.getFinishingText(text);
    }


}
