
import { CopyToClipboard } from 'react-copy-to-clipboard';
export function Emoji_Card({ Emoji = '', Nombre = "" }) {

    return (

        <div>
            <CopyToClipboard text={Emoji} >
                <div className="cursor-pointer btn h-32 overflow-hidden p-4 flex flex-col gap-3  border border-gray-600  shadow-xl [ hover:border-purple-600 transition-all ]">
                    <div className="text-5xl text-center">{Emoji}</div>
                    <div className="flex justify-center">
                        <h2 className=" text-center break-words">{Nombre}</h2>
                    </div>
                </div>

            </CopyToClipboard>

        </div>

    );

}