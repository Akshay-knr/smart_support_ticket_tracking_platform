package com.akshay.inventory.service;

import com.akshay.inventory.model.Ticket;

import java.util.List;

public interface TicketService {

    Ticket createTicket(Ticket ticket);

    List<Ticket> getAllTickets();

    Ticket getTicketById(Long id);

    void deleteTicket(Long id);
}