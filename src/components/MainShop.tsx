import React from 'react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Card } from './Card';
import { Cart } from './Cart';

class MainShop extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            products: [
                {
                    id: 0,
                    title: 'Cauliflower',
                    price: 15,
                    src: '/Broccoli2.jpg',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 1,
                    title: 'Carrot',
                    price: 5,
                    src: '/carrot.jpg',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 2,
                    title: 'Red Leaf Lettuce',
                    price: 9,
                    src: 'https://orgaci-store-demo.myshopify.com/cdn/shop/products/pro18.jpg?v=1683777002',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 3,
                    title: 'Cabbage',
                    price: 9,
                    src: 'https://orgaci-store-demo.myshopify.com/cdn/shop/products/pro24.jpg?v=1683791686',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 4,
                    title: 'Fresh Cucumber',
                    price: 9,
                    src: 'https://orgaci-store-demo.myshopify.com/cdn/shop/products/pro16.jpg?v=1683777006',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 5,
                    title: "Green Pee's",
                    price: 9,
                    src: 'https://orgaci-store-demo.myshopify.com/cdn/shop/products/pro15.jpg?v=1683777008',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 6,
                    title: 'Eggplant',
                    price: 9,
                    src: 'https://orgaci-store-demo.myshopify.com/cdn/shop/products/pro49.jpg?v=1683776976',
                    quantity: 0,
                    total: 0
                },
                {
                    id: 7,
                    title: 'Radish',
                    price: 9,
                    src: '/cucai.jpg',
                    quantity: 0,
                    total: 0
                },
            ],
            lastTotal: 0,
            cashInput : 0,
            cashReceived: 0,
            cashRemain: 0,
            isDone : false,
            totalCashReceived: 0,
            cashReturn: 0,
        };

        this.addToCart = this.addToCart.bind(this);
        this.removeCart = this.removeCart.bind(this);
        this.minusCart = this.minusCart.bind(this);
        this.sendTotalQtt = this.sendTotalQtt.bind(this);
    }

    addToCart(id: number) {
        const { products } = this.state;
        const newProducts = products.map((e: any) => {
            if (e.id !== id) return e;
            else {
                e.quantity += 1;
                e.total = e.quantity * e.price;
                this.setState({
                    lastTotal: products.reduce((total: number, e: any) => e.total + total, 0),
                });
                return e;
            }
        });

        const newQtt = products.reduce((quantt: number, product: any) => product.quantity + quantt, 0);

        this.sendTotalQtt(newQtt);
        this.setState({ products: newProducts });
    }

    removeCart(id: number) {
        const { products } = this.state;
        const newProducts = products.map((e: any) => {
            if (e.id !== id) return e;
            else {
                e.quantity = 0;
                e.total = 0;
                this.setState({
                    lastTotal: products.reduce((total: number, e: any) => e.total + total, 0),
                });
                return e;
            }
        });

        const newQtt = products.reduce((quantt: number, product: any) => product.quantity + quantt, 0);

        this.sendTotalQtt(newQtt);
        this.setState({ products: newProducts });
    }

    minusCart(id: number) {
        const { products } = this.state;
        const newProducts = products.map((e: any) => {
            if (e.id !== id) return e;
            else {
                e.quantity -= 1;
                e.total = e.quantity * e.price;
                this.setState({
                    lastTotal: products.reduce((total: number, e: any) => e.total + total, 0),
                });
                return e;
            }
        });

        const newQtt = products.reduce((quantt: number, product: any) => product.quantity + quantt, 0);

        this.sendTotalQtt(newQtt);
        this.setState({ products: newProducts });
    }

    sendTotalQtt(value : number) {
        this.props.sendTotalQtt(value);
    }

    handleCashPay(cashInput:number) {
        const cashRemain = this.state.lastTotal -= cashInput;
        this.setState({cashReceived : cashInput});
        this.setState({cashRemain : cashRemain <= 0 ? 0 : cashRemain});
        this.setState({isDone : cashRemain <= 0 ? false : true});
        this.setState({totalCashReceived : this.state.totalCashReceived += cashInput});
        this.setState({cashReturn : cashRemain <= 0 ? -cashRemain : 0});
    }

    render() {
        const { products, lastTotal, cashInput, cashReceived, cashRemain, isDone, totalCashReceived, cashReturn } = this.state;
        const { open, setOpen, setClose } = this.props;

        return (
            <div className="main-shop">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h3 id='products' className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Products</h3>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((e: any) => {
                                return (
                                    <Card
                                        key={e.id}
                                        title={e.title}
                                        price={e.price}
                                        src={e.src}
                                        addToCart={() => this.addToCart(e.id)}
                                    >
                                    </Card>)
                            })}
                        </div>

                        {/* Show/hide shopping cart */}
                        <Transition.Root show={open} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-hidden">
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                                enterFrom="translate-x-full"
                                                enterTo="translate-x-0"
                                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                                leaveFrom="translate-x-0"
                                                leaveTo="translate-x-full"
                                            >
                                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                            <div className="flex items-start justify-between">
                                                                <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                                                <div className="ml-3 flex h-7 items-center">
                                                                    <button
                                                                        type="button"
                                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                        onClick={setClose}
                                                                    >
                                                                        <span className="absolute -inset-0.5" />
                                                                        <span className="sr-only">Close panel</span>
                                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            {products.map((e: any) => {
                                                                if (e.quantity > 0) {
                                                                    return (
                                                                        <Cart
                                                                            key={e.id}
                                                                            id={e.id}
                                                                            name={e.title}
                                                                            price={e.price}
                                                                            quantity={e.quantity}
                                                                            imageSrc={e.src}
                                                                            total={lastTotal}
                                                                            onPlus={() => this.addToCart(e.id)}
                                                                            onMinus={() => this.minusCart(e.id)}
                                                                            onRemove={() => this.removeCart(e.id)}
                                                                        ></Cart>
                                                                    );
                                                                }
                                                                else {
                                                                    return;
                                                                }
                                                            })}
                                                        </div>
                                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <p>Subtotal</p>
                                                                <p>${lastTotal}</p>
                                                            </div>
                                                            <p className="mt-0.5 text-sm text-gray-500">Input cash below to checkout</p>
                                                            <input
                                                                type="text"
                                                                name="price"
                                                                id="price"
                                                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                placeholder="0.00"
                                                                onChange={(e) => this.setState({cashInput : Number(e.target.value)}) }
                                                            />
                                                            <p className="mt-0.5 text-sm text-gray-500">Cash received: ${cashReceived}</p>
                                                            <p className="mt-0.5 text-sm text-gray-500">Remaining cash: ${cashRemain}</p>
                                                            {isDone ? (<p className="mt-0.5 text-sm text-gray-500">Please pay the remaining cash !</p>) : ''}
                                                            <p className="mt-0.5 text-sm text-gray-500 border-t border-gray-200">Total cash received : ${totalCashReceived}</p>
                                                            <p className="mt-0.5 text-sm text-gray-500">Cash return: ${cashReturn}</p>

                                                            <div className="mt-6">
                                                                <a
                                                                    href="#"
                                                                    onClick={() => this.handleCashPay(cashInput)}
                                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </div>
                                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                                <p>
                                                                    or
                                                                    <button
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        onClick={setClose}
                                                                    >
                                                                        Continue Shopping
                                                                        <span aria-hidden="true"> &rarr;</span>
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition.Root>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainShop;