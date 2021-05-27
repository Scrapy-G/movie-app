export default function List ({ items, renderItem }) {
    
    return (
        <ul>
            {items.map((item, i) => { 
                return <li key={i}>{renderItem(item)}</li>;
            })}
        </ul>
    );
}