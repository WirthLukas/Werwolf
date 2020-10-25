import { Role } from '../models/role.model';

export class RolesService {
    static roles: Role[] = [
        {
            name: 'Werwolf',
            description: '',
            imageLink: 'https://1.bp.blogspot.com/-ovIFwfGfai8/Vq-uH5tCMVI/AAAAAAAAT4Q/w7i9kC6oz4Y/s1600/2-IMG_20160127_0003.jpg',
        },
        {
            name: 'Jäger',
            imageLink: 'https://tse3.mm.bing.net/th?id=OIP.L0KQrMfDSZlWlhl5jXdHkAHaHa&pid=Api',
            description: '',
        },
    ];
}
