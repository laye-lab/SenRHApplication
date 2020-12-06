package com.senrh.myapp.repository.search;

import com.senrh.myapp.domain.Department;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


/**
 * Spring Data Elasticsearch repository for the {@link Department} entity.
 */
public interface DepartmentSearchRepository extends ElasticsearchRepository<Department, Long> {
}
