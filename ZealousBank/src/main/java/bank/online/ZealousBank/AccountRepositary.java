package bank.online.ZealousBank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AccountRepositary extends JpaRepository<Account, Long> {

}
