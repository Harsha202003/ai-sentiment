package com.harsha.aisentiment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.harsha.aisentiment.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}