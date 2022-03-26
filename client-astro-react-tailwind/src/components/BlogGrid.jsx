import BlogGridItem from './BlogGridItem';

export default function BlogGrid({ posts }) {
    return (
        <div className="grid grid-cols-3 gap-6">
            {posts && posts.data && posts.data.length > 0 ? posts.data.map((post) => <BlogGridItem post={post} />) : 'No posts founds'}
        </div>
    );
}
