const fs = require('fs')
const uuid = require('uuid')

// access global mock db file
const tickets = require(global.mock_db)

// write service method implementations
const ticket_service = {
    getAll() {
        return tickets
    },
    getById(id) {
        return tickets.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = getId()
                
        const ticket = req.body

        const new_ticket = {
            id: new_id,
            ticket: ticket
        }

        tickets.push(new_ticket)
        
        writeToFile(tickets)
        
        return new_ticket
    },
    update(id, updateData){
        const ticketIndex = tickets.findIndex(t => t.id == id)

        if (ticketIndex === -1) {
            return null
        }

        tickets[ticketIndex].ticket = { ...tickets[ticketIndex].ticket, ...updateData }

        writeToFile(tickets)

        return tickets[ticketIndex]
    },
    delete(id) {
        const index = tickets.findIndex(u => u.id == id)
        tickets.splice(index, 1)    
        writeToFile(tickets)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate id by uuid
let getId = () => {
    return uuid.v4();
}

module.exports = ticket_service
