package team.domain;

import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import team.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "menus", path = "menus")
public interface MenuRepository
    extends PagingAndSortingRepository<Menu, Long> {}
