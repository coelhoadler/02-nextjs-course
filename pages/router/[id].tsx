import { useRouter } from 'next/router';

export default function Random() {
    
    const router = useRouter();
    // console.log('>>> router', router);
    
    return (
        <div>ID atual: { router.query.id }</div>
    )
}