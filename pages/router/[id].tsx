import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Random() {
    
    const router = useRouter();
    // console.log('>>> router', router);
    
    return (
        <>
            <div>ID atual: { router.query.id }</div>
            <p><Link href='/'>voltar para o início</Link></p>
        </>
    )
}