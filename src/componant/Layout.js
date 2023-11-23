import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className='flex w-full h-[100vh] bg-white shadow-2xl shadow-black'>
                <div className='w-full sm:w-[65%] md:w-1/2 px-16 flex flex-col justify-center items-start'>
                    <Outlet />
                </div>
                <div className='hidden sm:flex relative sm:w-[45%] md:w-3/4'>
                    <img className='h-full' src='./images/welcome-image.png' />
                </div>
            </div>
        </>
    )
}

export default Layout;