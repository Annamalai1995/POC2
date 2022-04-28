package bank.online.ZealousBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
	@Autowired
	AccountRepositary repo;

	public Account savingAccount(Account account) {
		// TODO Auto-generated method stub
		return  repo.save(account);
	}
	public Account getByValid(long data1,String data2)
	{
		return repo.findAccountByValidation(data1, data2);
		
	}
	
}
