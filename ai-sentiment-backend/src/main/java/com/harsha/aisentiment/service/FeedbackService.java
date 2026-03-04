package com.harsha.aisentiment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.harsha.aisentiment.model.Feedback;
import com.harsha.aisentiment.repository.FeedbackRepository;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository repository;

    public Feedback saveFeedback(Feedback feedback) {

        // Dummy Sentiment Logic (for now)
        if(feedback.getText().toLowerCase().contains("good")) {
            feedback.setSentiment("Positive");
        } else if(feedback.getText().toLowerCase().contains("bad")) {
            feedback.setSentiment("Negative");
        } else {
            feedback.setSentiment("Neutral");
        }

        return repository.save(feedback);
    }

    public List<Feedback> getAllFeedback() {
        return repository.findAll();
    }
}