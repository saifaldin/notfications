import axios from 'axios';

const POSTS_CLIENT = axios.create({
	baseURL: 'http://localhost:3001',
});

export const POSTS_API = {
	getPostById(postId: string, authorization: string) {
		return POSTS_CLIENT.get(`/posts/${postId}`, {
			headers: {
				authorization,
			},
		});
	},
};
