import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import './update.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Update = () => {
    const { user } = useContext(AuthContext)
    const update = useLoaderData()
    const { level, _id, description, title, date, image, marks } = update || {};
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const level = form.level.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;
        const marks = form.marks.value;
        const update = { level, _id, email, description, title, date, image, marks };

        axios.put(`https://group-study-server-side.vercel.app/allasignment/${_id}`, update)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="update-bg-img pt-10 pb-20">
            <div className="border max-w-5xl mx-auto  rounded-xl ">
                <div className="">
                    <h1 className="text-center text-5xl font-bold text-black pt-5">Update Assignments</h1>
                </div>
                <div className=" ">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="text-end">
                            <label className="label-text font-semibold text-xl underline underline-offset-2 text-black">Choice your level : </label>
                            <select className="border bg-[#ecfeff] ml-4 px-3 rounded-lg py-2" id="cars" defaultValue={level} name="level">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl text-black">Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={title}
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black text-whitelabel-text font-semibold text-xl">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={date}
                                    className="input bg-[#ecfeff] input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-whitelabel-text font-semibold text-xl text-black">Marks</span>
                                </label>
                                <input
                                    type="text"
                                    name="marks"
                                    defaultValue={marks}
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black label-text font-semibold text-xl">Image Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    className="input bg-[#ecfeff] input-bordered" required />

                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text font-semibold text-xl">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="input bg-[#ecfeff] input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text font-semibold text-xl">Description</span>
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                className="p-8 rounded bg-[#ecfeff]"
                                id="" cols="30"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full">Update Assignment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;