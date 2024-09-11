package team.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import team.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "pushes", path = "pushes")
public interface PushRepository
    extends PagingAndSortingRepository<Push, Long> {}
