export default function Spinner() {
    return (
        <div className="flex justify-center h-screen">
            <div role="status" className="pt-8">
                <span className="loading loading-spinner loading-md text-red-600"></span>
            </div>
        </div>

    )
}
