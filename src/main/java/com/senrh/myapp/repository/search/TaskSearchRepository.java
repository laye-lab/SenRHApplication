package com.senrh.myapp.repository.search;

import com.senrh.myapp.domain.Task;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


/**
 * Spring Data Elasticsearch repository for the {@link Task} entity.
 */
public interface TaskSearchRepository extends ElasticsearchRepository<Task, Long> {
}
