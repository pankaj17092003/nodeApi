import db from '../config/db.js';

export const getUsers = async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM users where status =1');
      res.status(200).json({
        'success': true,
        'message': 'Users retrieved successfully',
        'data':rows});
    } catch (err) {
      console.error('Error retrieving users:', err);
      res.status(500).json({ message: 'Error retrieving users' });
    }
  };
  