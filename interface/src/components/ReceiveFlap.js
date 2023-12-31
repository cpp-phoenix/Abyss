
import {CopyToClipboard} from 'react-copy-to-clipboard';
import QRCode from "react-qr-code";

function ReceiveFlap({showReceiveToken, abyssAddress}) {
    return (
        <div className='flex flex-col items-center justify-center fixed h-full w-full backdrop-blur-sm z-10'>
            <div className='flex w-[370px] justify-end'>
                <div className=''>
                    <button onClick={() => showReceiveToken(false)} className='bg-[#f1f5f9] rounded-full p-[6px]'><svg data-v-4d731bae="" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3.5L3.5 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                </div>
            </div>
            <div className='rounded-[34px] w-[370px] h-3/6 bg-white p-6'>
                <QRCode className='w-full h-full' value={abyssAddress}/>
            </div>
            <div className="flex flex-col justify-center items-center rounded-[24px] w-[370px] py-3 space-y-2">
                <div className="font-semibold text-sm text-[#94A3B8]">Your Abyss Address</div>
                <div className="flex justify-center text-xs font-semibold">
                    {abyssAddress}
                    <CopyToClipboard text={abyssAddress}>
                    <button className='pl-1'><svg data-v-593ef8b9="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-slate-400"><path class="copy_svg__copy-path" d="M14.1145 9.94827C14.1816 8.8779 14.2168 7.76883 14.2168 6.63246C14.2168 6.17207 14.211 5.71616 14.1997 5.26549C14.1917 4.94654 14.0882 4.63658 13.8994 4.37941C13.185 3.40646 12.6153 2.80088 11.6777 2.07698C11.4181 1.87657 11.0995 1.76786 10.7717 1.76072C10.4455 1.75361 10.105 1.75 9.74121 1.75C8.63995 1.75 7.75104 1.78308 6.8319 1.84613C6.04346 1.90021 5.41726 2.5279 5.36787 3.31665C5.30084 4.38702 5.26562 5.49608 5.26562 6.63246C5.26562 7.76883 5.30085 8.8779 5.36787 9.94827C5.41726 10.737 6.04346 11.3647 6.8319 11.4188C7.75104 11.4818 8.63995 11.5149 9.74121 11.5149C10.8425 11.5149 11.7314 11.4818 12.6505 11.4188C13.439 11.3647 14.0652 10.737 14.1145 9.94827Z" stroke="currentColor" stroke-width="2"></path><path class="copy_svg__copy-path" d="M10.6341 12.6834C10.7011 11.613 10.7363 10.5039 10.7363 9.36756C10.7363 8.90717 10.7306 8.45126 10.7192 8.00059C10.7112 7.68165 10.6078 7.37169 10.4189 7.11452C9.70458 6.14157 9.13488 5.53599 8.19725 4.81209C7.93767 4.61167 7.61907 4.50297 7.29121 4.49582C6.96506 4.48872 6.62448 4.48511 6.26074 4.48511C5.15949 4.48511 4.27057 4.51819 3.35143 4.58123C2.56299 4.63531 1.9368 5.26301 1.88741 6.05176C1.82038 7.12213 1.78516 8.23119 1.78516 9.36756C1.78516 10.5039 1.82038 11.613 1.88741 12.6834C1.9368 13.4721 2.56299 14.0998 3.35143 14.1539C4.27057 14.2169 5.15949 14.25 6.26074 14.25C7.362 14.25 8.25091 14.2169 9.17005 14.1539C9.95849 14.0998 10.5847 13.4721 10.6341 12.6834Z" stroke="currentColor" stroke-width="2"></path></svg></button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}

export default ReceiveFlap;