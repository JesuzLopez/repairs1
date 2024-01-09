import { RepairService } from "./repairs.service.js"

export const findAllRepairs = async(req,res) => {
   try{
    const repairs = await RepairService.findAll()

    return res.status(200).json(repairs)
   } catch(error){
    return res.status(500).json({
        status: 'fail',
        message: 'Something went very wrong! XD'
    })
   }
}

export const createRepair = async(req,res) => {
   try{
    const { date, userId } =req.body

    const repair =  await RepairService.create({ date, userId })

    return res.status(201).json(repair)

   } catch(error){
    return res.status(500).json({
        status: 'fail',
        message: 'Something went very wrong! XD'
    })
   }
}

export const findOneRepair = catchAsync(async (req, res) => {
    const { repair } = req
   
    return res.status(200).json(repair)
})    

export const updateRepair = async(req,res) => {
   try{
  
    const repairUpdate = await RepairService.update(repair)

    return res.status(200).json(repairUpdate)

   } catch(error){
    return res.status(500).json({
        status: 'fail',
        message: 'Something went very wrong! XD'
    })
   }
}

export const deleteRepair = async (req,res) => {
   try{
   const { repair } = req

    await RepairService.delete(repair)

    return res.status(204).json(null)

   } catch(error){
    return res.status(500).json({
        status: 'fail',
        message: 'Something went very wrong! XD'
    })
   }
}