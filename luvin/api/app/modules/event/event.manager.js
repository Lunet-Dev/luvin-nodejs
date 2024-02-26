import slugify from 'slugify';

import EventModel from './event.model';

import buildPaginationQuery from '../../lib/build-pagination-query';

export default {
  async createEvent(eventData) {
    try {
      const event = await new EventModel(eventData).save();
      return event;
    } catch (error) {
      throw error;
    }
  },

  async updateEvent(eventId, eventData) {
    try {
      if (eventData.name) {
        eventData.slug = slugify(eventData.name.toLowerCase(), '-');
      }
      const event = await EventModel.findByIdAndUpdate(
        eventId,
        { $set: eventData },
        { new: true }
      ).lean();
      return event;
    } catch (error) {
      throw error;
    }
  },

  async deleteEvent(eventId) {
    try {
      const result = await EventModel.findByIdAndRemove(eventId);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async findUpcommingEvents() {
    try {
      const now = new Date().getTime();
      let query = EventModel.find({ startedAt: { $gt: now } }).sort({
        createdAt: -1,
      });
      query = buildPaginationQuery(query, 6, 1);
      const events = await query.lean().exec();
      return events;
    } catch (error) {
      throw error;
    }
  },

  async findOccurredEvents(limit, page, month) {
    try {
      const now = new Date().getTime();
      const conditions = { endedAt: { $lt: now } };
      // if (month) {
      //   conditions.
      // }
      // TODO: find by time
      let query = EventModel.find(conditions).sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      const events = await query.lean().exec();
      return events;
    } catch (error) {
      throw error;
    }
  },

  async countOccurredEvents() {
    try {
      const now = new Date().getTime();
      const conditions = { endedAt: { $lt: now } };
      // if (month) {
      //   conditions.
      // }
      // TODO: find by time
      const count = await EventModel.count(conditions);
      return count;
    } catch (error) {
      throw error;
    }
  },

  async getEventBySlug(slug) {
    try {
      const event = await EventModel.findOne({ slug });
      return event;
    } catch (error) {
      throw error;
    }
  },
};
