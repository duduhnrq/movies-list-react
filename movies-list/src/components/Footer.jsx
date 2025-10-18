import ReactLogo from '../assets/react.svg?react';

function Footer() {
    return (
        <div>
            <hr className='w-6xl border-black-300 m-auto' />
            <div className="m-auto p-5 text-center text-white text-sm">
                <p>Feito com <ReactLogo className="inline-block w-6 h-6 mx-1 animate-spin" /> por <a href="https://github.com/duduhnrq" target='_blank' className='hover:underline'>Eduardo Henrique</a></p>
            </div>
        </div>
    )
}

export default Footer;