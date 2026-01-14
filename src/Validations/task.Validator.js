import Joi from 'joi';

const validateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
      'string.min': 'Title must be at least 3 characters',
      'string.max': 'Title cannot exceed 100 characters',
      'any.required': 'Title is required'
    }),
    description: Joi.string().max(500).allow('').messages({
      'string.max': 'Description cannot exceed 500 characters'
    }),
    status: Joi.string().valid('pending', 'in-progress', 'completed').messages({
      'any.only': 'Status must be pending, in-progress, or completed'
    }),
    priority: Joi.string().valid('low', 'medium', 'high').messages({
      'any.only': 'Priority must be low, medium, or high'
    }),
    dueDate: Joi.date().min('now').allow(null).messages({
      'date.min': 'Due date cannot be in the past'
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateTask ;