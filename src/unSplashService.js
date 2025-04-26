import axios from 'axios';

export const fetchArticles = async (topic, currentPage) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            client_id: 'OKfaOBL64FH5FwBHogtq6mtW3yNM2Vk8is0PQ_gk1U8',
            query: topic,
            per_page: 12,
            page: currentPage,
        }
    });
    return {
        results: response.data.results,
        total_pages: response.data.total_pages,
    };
};

