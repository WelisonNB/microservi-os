import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export class AuthController {
    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const response = await axios.get(`${process.env.USER_SERVICE_URL}/users/${username}`);
            const user = response.data.user;

            if (!user) {
                return res.status(401).json({ message: 'Authentication failed' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Authentication failed' });
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
