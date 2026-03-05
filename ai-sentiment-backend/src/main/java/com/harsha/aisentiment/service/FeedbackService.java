package com.harsha.aisentiment.service;

import com.harsha.aisentiment.model.Feedback;
import com.harsha.aisentiment.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository repository;

    public Feedback saveFeedback(Feedback feedback){
        return repository.save(feedback);
    }

    public List<Feedback> getAllFeedback(){
        return repository.findAll();
    }

    public void deleteFeedback(Long id){
        repository.deleteById(id);
    }

}