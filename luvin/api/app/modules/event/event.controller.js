import EventManager from './event.manager';

export default {
  async createEvent(req, res, next) {
    try {
      const eventData = req.body;
      const result = await EventManager.createEvent(eventData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateEvent(req, res, next) {
    try {
      const { eventId } = req.params;
      const eventData = req.body;
      const result = await EventManager.updateEvent(eventId, eventData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteEvent(req, res, next) {
    try {
      const { eventId } = req.params;
      const result = await EventManager.deleteEvent(eventId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getUpcommingEvents(req, res, next) {
    try {
      const result = await EventManager.findUpcommingEvents();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getOccurredEvents(req, res, next) {
    try {
      const { limit, page, month } = req.query;
      const [events, count] = await Promise.all([
        EventManager.findOccurredEvents(limit, page, month),
        EventManager.countOccurredEvents(limit, page, month),
      ]);
      return res.status(200).json({ data: { total: count, events } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getDetailEvent(req, res, next) {
    try {
      const { eventSlug } = req.params;
      const result = await EventManager.getEventBySlug(eventSlug);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
