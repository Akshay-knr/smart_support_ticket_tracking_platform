package com.akshay.inventory.controller;

import com.akshay.inventory.model.Ticket;
import com.akshay.inventory.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class TicketController {

    private final TicketService ticketService;

    // CREATE Ticket
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    // GET All Tickets
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    // GET Ticket by ID
    @GetMapping("/{id}")
    public Ticket getTicketById(@PathVariable Long id) {
        return ticketService.getTicketById(id);
    }

    // DELETE Ticket
    @DeleteMapping("/{id}")
    public String deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return "Ticket deleted successfully";
    }

    @PutMapping("/{id}")
public Ticket updateTicket(@PathVariable Long id, @RequestBody Ticket updatedTicket) {
    return ticketService.updateTicket(id, updatedTicket);
    }
}