package bank.online.ZealousBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class BankController {
	@Autowired
	AccountService aserv;
	@Autowired
	TransactionService tserv;
	@PostMapping("/newacc")
	public String accountCreate(@RequestBody Account account)
	{
		Account obj=aserv.savingAccount(account);
		return obj.getAccountNumber()+"Has opened for"+account.getAccountHolder();
		
		
	}

}
