//this is a web hook api call

async function handleRevalidate (req,res){
    const event = req.body;
    if(event.model === 'product'){
        const id = event.entry.id;
        //since i have multiple promises group them together
        await Promise.all([
            res.revalidate('/'),
            res.revalidate(`/products/${id}`),
        ]);
        console.log('[api/revalidate]: revalidated product',id);
    }
    res.status(204).end()
}

export default handleRevalidate;