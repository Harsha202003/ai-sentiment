package com.harsha.aisentiment.controller;

import com.harsha.aisentiment.model.Feedback;
import com.harsha.aisentiment.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService service;

    @PostMapping
    public Feedback save(@RequestBody Feedback feedback) {
        return service.saveFeedback(feedback);
    }

    @GetMapping
    public List<Feedback> getAll() {
        return service.getAllFeedback();
    }

    @DeleteMapping("/{id}")
public void deleteFeedback(@PathVariable Long id) {
    service.deleteFeedback(id);
}

}