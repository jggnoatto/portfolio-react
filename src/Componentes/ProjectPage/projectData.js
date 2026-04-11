import precoCertoLogo from '../../assets/preco-certo-logo.png';
import metalBankLogo from '../../assets/metalbank-logo.png';
import landingMetalBankLogo from '../../assets/metalbank-lp-logo.png';
import preco01 from '../../assets/pc-1.png';
import preco02 from '../../assets/pc-2.png';
import preco03 from '../../assets/pc-3.png';
import preco04 from '../../assets/pc-4.png';
import preco05 from '../../assets/pc-5.png';
import preco06 from '../../assets/pc-6.png';
import preco07 from '../../assets/pc-7.png';
import preco08 from '../../assets/pc-8.png';
import mb1 from '../../assets/mb-1.png';
import mb2 from '../../assets/mb-2.png';
import mb3 from '../../assets/mb-3.png';   
import mb4 from '../../assets/mb-4.png';
import mb5 from '../../assets/mb-5.png';
import mb6 from '../../assets/mb-6.png';
import mb7 from '../../assets/mb-7.png';
import lpmb1 from '../../assets/lpmb-1.png';
import lpmb2 from '../../assets/lpmb-2.png';
import lpmb3 from '../../assets/lpmb-3.png';
import lpmb4 from '../../assets/lpmb-4.png';
import lpmb5 from '../../assets/lpmb-5.png';
import lpmb6 from '../../assets/lpmb-6.png';
import lpmb7 from '../../assets/lpmb-7.png';
import lpmb8 from '../../assets/lpmb-8.png';
import lpmb9 from '../../assets/lpmb-9.png';
import lpmb10 from '../../assets/lpmb-10.png';

export const getProjectsData = (t) => [
    {
        id: "preco-certo",
        title: "Preço Certo",
        description: t('projectData.precoCertoDesc'),
        logo: precoCertoLogo,
        images: [preco01, preco02, preco03, preco04, preco05, preco06, preco07, preco08]
    },

    {
        id: "metalbank",
        title: "MetalBank",
        description: t('projectData.metalBankDesc'),
        logo: metalBankLogo,
        images: [mb1, mb2, mb3, mb4, mb5, mb6, mb7]
    },

    {
        id: "landing-page-metalbank",
        title: "Landing Page MetalBank",
        description: t('projectData.metalBankLpDesc'),
        logo: landingMetalBankLogo,
        images: [lpmb1, lpmb2, lpmb3, lpmb4, lpmb5, lpmb6, lpmb7, lpmb8, lpmb9, lpmb10]
    }
]